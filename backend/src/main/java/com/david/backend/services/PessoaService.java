package com.david.backend.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.david.backend.models.Pessoa;
import com.david.backend.repositories.PessoaRepositorio;

@Service
public class PessoaService {

    @Autowired
    private PessoaRepositorio pessoaRepositorio;

    public List<Pessoa> encontrarTodas() {
        return pessoaRepositorio.findAll();
    }

    public Pessoa inserir(Pessoa pessoa) {
        pessoa.setDataCriacao(new Date());
        Pessoa pessoaNova = pessoaRepositorio.saveAndFlush(pessoa);
        return pessoaNova;
    }

    public Pessoa alterar(Pessoa pessoa) {
        pessoa.setDataAtualizacao(new Date());
        return pessoaRepositorio.saveAndFlush(pessoa);
    }

    public void remover(Long id) {
        Pessoa pessoa = pessoaRepositorio.findById(id).get();
        pessoaRepositorio.delete(pessoa);
    }
}
