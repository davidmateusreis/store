package com.david.backend.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.david.backend.models.Permissao;
import com.david.backend.models.PermissaoPessoa;
import com.david.backend.models.Pessoa;
import com.david.backend.repositories.PermissaoPessoaRepositorio;
import com.david.backend.repositories.PermissaoRepositorio;

@Service
public class PermissaoPessoaService {

    @Autowired
    private PermissaoPessoaRepositorio permissaoPessoaRepositorio;

    @Autowired
    private PermissaoRepositorio permissaoRepositorio;

    public void vincularPessoaPermissaoCliente(Pessoa pessoa) {
        List<Permissao> listaPermissao = permissaoRepositorio.findByNome("cliente");
        if (listaPermissao.size() > 0) {
            PermissaoPessoa permissaoPessoa = new PermissaoPessoa();
            permissaoPessoa.setPessoa(pessoa);
            permissaoPessoa.setPermissao(listaPermissao.get(0));
            permissaoPessoa.setDataCriacao(new Date());
            permissaoPessoaRepositorio.saveAndFlush(permissaoPessoa);
        }
    }
}
