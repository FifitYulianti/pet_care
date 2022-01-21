function errHandler(err, req, res, next) {
    // console.log(err[0]);
    let status = err.status
    let messageErr = err.messageErr || err.message

    //console.log(messageErr);
    if (!status) {
        return res.status(500).json({
            success: false,
            error: "Internal Server Error",
            error: messageErr
            //devErr : err
        })
    } else {
        return res.status(status).json({
            success: false,
            error: messageErr
        })
    }
}

module.exports = errHandler