// Create and send token save in cookie
const sendToken = (user, statusCode, res, ) => {
    // Create JWT Token
    const token = user.getJwtToken();

    //Options for cookie
    const options = {
        expire : new Date(Date.now() + process.env.COOKE_EXPIRES_TIME *24*60*60*1000),
        httpOnly : true
    };

    // if(process.env.NODE_ENV === 'production ') {
    //     options.secure = true;
    // }

    res
        .status(statusCode)
        .cookie('token', token, options)
        .json({
            success : true,
            token 
        });
}

module.exports = sendToken;