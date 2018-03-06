module.exports = {
    upload: (req, res) => {
        return res.status(200).json({
            success: true,
            message: "Image uploaded!",
            data: req['files']
        });

    }
}
