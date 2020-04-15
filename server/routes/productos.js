const express = require("express");

const Producto = require("../models/productos");

const app = express();

app.get("/productos", async (req, res) => {
    await Producto.find().exec((err, productos) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err,
            });
        }
        res.json({
            ok: true,
            productos,
        });
    });
});

app.post("/productos", async (req, res) => {
    let body = req.body;

    let producto = new Producto({
        nombre: body.nombre,
        precio: body.precio,
    });

    await producto.save((err, productoDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err,
            });
        }

        res.json({
            ok: true,
            producto: productoDB,
        });
    });
});

//actualizar
app.put("/productos/:id", async (req, res) => {
    let id = req.params.id;
    let body = req.body;

    await Producto.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, productoDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err,
            });
        }

        res.json({
            ok: true,
            producto: productoDB,
        });
    });
});

app.delete("/productos/:id", async (req, res) => {
    let id = req.params.id;

    await Producto.findByIdAndRemove(id, (err, productoBorrado) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err,
            });
        }

        if (!productoBorrado) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "producto no encontrado",
                },
            });
        }

        res.json({
            ok: true,
            producto: productoBorrado,
        });
    });
});

module.exports = app;
