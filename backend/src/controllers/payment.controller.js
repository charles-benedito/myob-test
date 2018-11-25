import HTTPStatus from 'http-status';
import Model from '../models/payment.model';

export async function read(req, res, next) {
    try {
        const documents = await Model.find({}, {}, { sort: { createdAt: -1 } }).populate('employee');
        return res.status(HTTPStatus.OK).json(documents);
    } catch (err) {
        err.status = HTTPStatus.BAD_REQUEST;
        return next(err);
    }
}

export async function createOne(req, res, next) {
    try {
        const newDocument = new Model(req.body);
        await newDocument.save();
        return res.status(HTTPStatus.CREATED).json({ err: 0 });
    } catch (err) {
        err.status = HTTPStatus.BAD_REQUEST;
        return next(err);
    }
}

export async function deleteOne(req, res, next) {
    try {
        await Model.findOneAndRemove({ _id: req.params.id });
        return res.sendStatus(HTTPStatus.OK).json({ err: 0 });
    } catch (err) {
        err.status = HTTPStatus.BAD_REQUEST;
        return next(err);
    }
}
