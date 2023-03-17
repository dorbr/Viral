"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomError extends Error {
    constructor(error) {
        super();
        this.name = this.constructor.name;
        if (error instanceof Error) {
            this.type = error.type;
            this.statusCode = error.statusCode;
            this.message = (error === null || error === void 0 ? void 0 : error.message) || '';
            this.stack = (error === null || error === void 0 ? void 0 : error.stack) || '';
        }
        else {
            this.message = error;
        }
        if (this instanceof BadRequestError) {
            console.error(this);
            this.type = 'Error: Bad Request';
            this.statusCode = 400;
        }
        else if (this instanceof UnauthorizedError) {
            console.error(this);
            this.type = 'Error: Unauthorized';
            this.statusCode = 401;
        }
        else if (this instanceof ForbiddenError) {
            console.error(this);
            this.type = 'Error: Forbidden';
            this.statusCode = 403;
        }
        else if (this instanceof NotFoundError) {
            console.error(this);
            this.type = 'Error: Not Found';
            this.statusCode = 404;
        }
        else if (this instanceof ConflictError) {
            console.error(this);
            this.type = 'Error: Conflict';
            this.statusCode = 409;
        }
        else if (this instanceof NetworkError) {
            console.error(this);
            this.type = 'Error: Network Issue';
            this.statusCode = 418;
        }
    }
}
class BadRequestError extends CustomError {
}
class UnauthorizedError extends CustomError {
}
class ForbiddenError extends CustomError {
}
class NotFoundError extends CustomError {
}
class ConflictError extends CustomError {
}
class NetworkError extends CustomError {
}
exports.default = {
    CustomError,
    BadRequestError,
    UnauthorizedError,
    ForbiddenError,
    NotFoundError,
    ConflictError,
    NetworkError,
};
