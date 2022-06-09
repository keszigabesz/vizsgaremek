exports.findAll = (model) => model.find();

exports.findOne = (model, id) => model.findById(id);

exports.create = (newData) => {
    return newData.save();
};

exports.update = (model, id, updateData) => model.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = (model, id) => model.findByIdAndRemove(id);
