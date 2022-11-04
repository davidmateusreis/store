package com.david.backend.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.david.backend.models.Estado;
import com.david.backend.repositories.EstadoRepositorio;

@Service
public class EstadoService {

    @Autowired
    private EstadoRepositorio estadoRepositorio;

    public List<Estado> encontrarTodos() {
        return estadoRepositorio.findAll();
    }

    public Estado inserir(Estado estado) {
        estado.setDataCriacao(new Date());
        Estado estadoNovo = estadoRepositorio.saveAndFlush(estado);
        return estadoNovo;
    }

    public Estado alterar(Estado estado) {
        estado.setDataAtualizacao(new Date());
        return estadoRepositorio.saveAndFlush(estado);
    }

    public void remover(Long id) {
        Estado estado = estadoRepositorio.findById(id).get();
        estadoRepositorio.delete(estado);
    }
}