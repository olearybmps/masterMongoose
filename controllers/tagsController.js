const Tag = require('../models/tag');

const fetchAllTags = async (req, res) => {
    const tags = await Tag.find();
    res.json({ tags: tags });
};

const createTag = async (req, res) => {
    const { name } = req.body;
    const tag = await Tag.create({ name: name });
    res.json({ tag: tag });
};

const updateTag = async (req, res) => {
    const tagId = req.params.id;
    const { name } = req.body;
    const tag = await Tag.findByIdAndUpdate(tagId, { name: name });
    const updatedTag = await Tag.findById(tagId);
    res.json({ tag: updatedTag });
};

const deleteTag = async (req, res) => {
    const tagId = req.params.id;
    await Tag.deleteOne({ _id: tagId });
    res.json({ success: 'Tag has been deleted successfully' });
};

module.exports = {
    fetchAllTags,
    createTag,
    updateTag,
    deleteTag,
};