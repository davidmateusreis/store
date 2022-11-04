package com.david.backend.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.david.backend.models.Cidade;
import com.david.backend.repositories.CidadeRepositorio;

@Service
public class CidadeService {

    @Autowired
    private CidadeRepositorio cidadeRepositorio;

    public List<Cidade> encontrarTodas() {
        return cidadeRepositorio.findAll();
    }

    public Cidade inserir(Cidade cidade) {
        cidade.setDataCriacao(new Date());
        Cidade cidadeNovo = cidadeRepositorio.saveAndFlush(cidade);
        return cidadeNovo;
    }

    public Cidade alterar(Cidade cidade) {
        cidade.setDataAtualizacao(new Date());
        return cidadeRepositorio.saveAndFlush(cidade);
    }

    public void remover(Long id) {
        Cidade cidade = cidadeRepositorio.findById(id).get();
        cidadeRepositorio.delete(cidade);
    }
}
