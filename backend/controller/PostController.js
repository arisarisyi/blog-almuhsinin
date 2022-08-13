import Post from "../models/PostModel.js";
import path from "path";
import fs from "fs";
import slugify from "slugify";
import { Op } from "sequelize"

export const getPost = async (request, response) => {
  const page = parseInt(request.query.page) || 0;
  const limit = parseInt(request.query.limit) || 6;
  const search = request.query.search_query || "";
  const offset = limit * page;

  const totalRows = await Post.count({
    where: {
      [Op.or]: [{
        title: {
          [Op.like]: '%' + search + '%'
        }
      }, {
        author: {
          [Op.like]: '%' + search + '%'
        }
      }]
    }
  });
  const totalPage = Math.ceil(totalRows / limit);
  try {
    const res = await Post.findAll({
      where: {
        [Op.or]: [{
          title: {
            [Op.like]: '%' + search + '%'
          }
        }, {
          author: {
            [Op.like]: '%' + search + '%'
          }
        }]
      },
      offset: offset,
      limit: limit,
      order: [
        ['id', 'DESC']
      ]
    });
    response.json({
      result: res,
      page: page,
      limit: limit,
      totalRows: totalRows,
      totalPage: totalPage
    });
  } catch (error) {
    console.log(error.message);
  }
}

export const getPostById = async (request, response) => {
  try {
    const res = await Post.findOne({
      where: {
        slug: request.params.id
      }
    })
    response.json(res);
  } catch (error) {
    response.status(500).json(error)
  }
}

export const savePost = async (request, response) => {
  if (request.files === null) return response.status(400).json({ msg: "No File Uploaded" });
  const title = request.body.title;
  const options = {
    replacement: '-', // replace spaces with replacement character, defaults to `-`
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    strict: true, // strip special characters except replacement, defaults to `false`
    locale: 'en', // language code of the locale to use
  };
  const slug = slugify(title, options)
  const file = request.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${request.protocol}://${request.get("host")}/images/${fileName}`;
  const allowedType = ['.png', '.jpg', '.jpeg'];
  const desc = request.body.desc;
  const cat = request.body.cat;
  const author = request.body.author;

  if (!allowedType.includes(ext.toLowerCase())) return response.status(422).json({ msg: "Invalid Images" });
  if (fileSize > 15000000) return response.status(422).json({ msg: "Image must be less than 15 MB" });

  file.mv(`./public/images/${fileName}`,
    async (error) => {
      if (error) return response.status(500).json({ msg: error.message });
      try {
        await Post.create({ title: title, slug: slug, image: fileName, url: url, desc: desc, cat: cat, author: author });
        response.status(201).json({ msg: "Post has been posted!" })
      } catch (error) {
        response.status(500).json(error)
      }
    })
}

export const updatePost = async (request, response) => {
  const post = await Post.findOne({
    where: {
      slug: request.params.id
    }
  });
  if (!post) return response.status(404).json({ msg: "No Data Found" });

  let fileName = "";
  if (request.files === null) {
    fileName = post.image;
  } else {
    const file = request.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    const allowedType = ['.png', '.jpg', '.jpeg'];


    if (!allowedType.includes(ext.toLowerCase())) return response.status(422).json({ msg: "Invalid Images" });
    if (fileSize > 15000000) return response.status(422).json({ msg: "Image must be less than 15 MB" });

    // Menghapus file lama
    const filepath = `./public/images/${post.image}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/images/${fileName}`, (err) => {
      if (err) return response.status(500).json({ msg: err.message });
    });
  }
  const title = request.body.title;
  const url = `${request.protocol}://${request.get("host")}/images/${fileName}`;
  const desc = request.body.desc;
  const cat = request.body.cat;
  const author = request.body.author;
  try {
    await Post.update({ title: title, image: fileName, url: url, desc: desc, cat: cat, author: author }, {
      where: {
        slug: request.params.id
      }
    });
    response.status(200).json({ msg: "Post has been updated!" })
  } catch (error) {
    response.status(500).json(error)
  }
}

export const deletePost = async (request, response) => {
  const post = await Post.findOne({
    where: {
      id: request.params.id
    }
  });
  if (!post) return response.status(404).json({ msg: "No Data Found" });

  try {
    const filepath = `./public/images/${post.image}`;
    fs.unlinkSync(filepath);
    await Post.destroy({
      where: {
        id: request.params.id
      }
    });
    response.status(200).json({ msg: "Post Deleted Successfuly" });
  } catch (error) {
    response.status(500).json(error)
  }
}
