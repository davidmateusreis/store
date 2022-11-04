package com.david.backend.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.david.backend.models.Categoria;
import com.david.backend.repositories.CategoriaRepositorio;

@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepositorio categoriaRepositorio;

    public List<Categoria> encontrarTodas() {
        return categoriaRepositorio.findAll();
    }

    public Categoria inserir(Categoria categoria) {
        categoria.setDataCriacao(new Date());
        Categoria categoriaNova = categoriaRepositorio.saveAndFlush(categoria);
        return categoriaNova;
    }

    public Categoria alterar(Categoria categoria) {
        categoria.setDataAtualizacao(new Date());
        return categoriaRepositorio.saveAndFlush(categoria);
    }

    public void remover(Long id) {
        Categoria categoria = categoriaRepositorio.findById(id).get();
        categoriaRepositorio.delete(categoria);
    }

}
