package com.david.backend.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.david.backend.models.Marca;
import com.david.backend.repositories.MarcaRepositorio;

@Service
public class MarcaService {

    @Autowired
    private MarcaRepositorio marcaRepositorio;

    public List<Marca> encontrarTodas() {
        return marcaRepositorio.findAll();
    }

    public Marca inserir(Marca marca) {
        marca.setDataCriacao(new Date());
        Marca marcaNova = marcaRepositorio.saveAndFlush(marca);
        return marcaNova;
    }

    public Marca alterar(Marca marca) {
        marca.setDataAtualizacao(new Date());
        return marcaRepositorio.saveAndFlush(marca);
    }

    public void remover(Long id) {
        Marca marca = marcaRepositorio.findById(id).get();
        marcaRepositorio.delete(marca);
    }
    
}
