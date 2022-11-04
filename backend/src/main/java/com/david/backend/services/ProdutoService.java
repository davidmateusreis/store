package com.david.backend.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.david.backend.models.Produto;
import com.david.backend.repositories.ProdutoRepositorio;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepositorio produtoRepositorio;

    public List<Produto> encontrarTodos() {
        return produtoRepositorio.findAll();
    }

    public Produto inserir(Produto produto) {
        produto.setDataCriacao(new Date());
        Produto produtoNovo = produtoRepositorio.saveAndFlush(produto);
        return produtoNovo;
    }

    public Produto alterar(Produto produto) {
        produto.setDataAtualizacao(new Date());
        return produtoRepositorio.saveAndFlush(produto);
    }

    public void remover(Long id) {
        Produto produto = produtoRepositorio.findById(id).get();
        produtoRepositorio.delete(produto);
    }
}
