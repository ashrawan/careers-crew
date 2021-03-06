package com.project.careerscrew.utils.exceptions;

public class ForbiddenAccessException extends RuntimeException {

    public ForbiddenAccessException() {
    }

    public ForbiddenAccessException(String message) {
        super(message);
    }

    public ForbiddenAccessException(String message, Throwable cause) {
        super(message, cause);
    }

    public ForbiddenAccessException(Throwable cause) {
        super(cause);
    }
}
