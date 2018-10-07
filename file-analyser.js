module.exports = ({ files: { upfile } = {} }, res) =>
  upfile
    ? res.json({
        name: upfile.name,
        type: upfile.mimetype,
        size: upfile.data.length
      })
    : res.status(400).json({ error: 'no files were supplied' })
