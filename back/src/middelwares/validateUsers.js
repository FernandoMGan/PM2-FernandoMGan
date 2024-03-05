const validateUser = (req, res, next) => {
    const {name} = req.body;
    
    if (!name) {
        // console.log('Hay un error en el nombre del usuario');
        return res.status(400).json({
            error: "Falto el nombre al cargar el usuario";
        });
    } else {
        console.log('El nombre de usuario esta correcto');
        next();
    }

}