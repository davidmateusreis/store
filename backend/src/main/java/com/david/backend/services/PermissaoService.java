package com.david.backend.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.david.backend.models.Permissao;
import com.david.backend.repositories.PermissaoRepositorio;

@Service
public class PermissaoService {

    @Autowired
    private PermissaoRepositorio permissaoRepositorio;

    public List<Permissao> encontrarTodas() {
        return permissaoRepositorio.findAll();
    }

    public Permissao inserir(Permissao permissao) {
        permissao.setDataCriacao(new Date());
        Permissao permissaoNova = permissaoRepositorio.saveAndFlush(permissao);
        return permissaoNova;
    }

    public Permissao alterar(Permissao permissao) {
        permissao.setDataAtualizacao(new Date());
        return permissaoRepositorio.saveAndFlush(permissao);
    }

    public void remover(Long id) {
        Permissao permissao = permissaoRepositorio.findById(id).get();
        permissaoRepositorio.delete(permissao);
    }
}
