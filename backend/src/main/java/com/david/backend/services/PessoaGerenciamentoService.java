package com.david.backend.services;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.david.backend.models.Pessoa;
import com.david.backend.repositories.PessoaRepositorio;

@Service
public class PessoaGerenciamentoService {

    @Autowired
    private PessoaRepositorio pessoaRepositorio;

    @Autowired
    private EmailService emailService;

    public String solicitarCodigo(String email) {
        Pessoa pessoa = pessoaRepositorio.findByEmail(email);
        pessoa.setCodigoRecuperacaoSenha(getCodigoRecuperacaoSenha(pessoa.getId()));
        pessoa.setDataEnvioCodigo(new Date());
        pessoaRepositorio.saveAndFlush(pessoa);
        emailService.enviarEmailTexto(pessoa.getEmail(), "Código de recuperação de senha",
                "Olá, o seu código para recuperação de senha é: " + pessoa.getCodigoRecuperacaoSenha());
        return "Código enviado!";
    }

    public String alterarSenha(Pessoa pessoa) {
        Pessoa pessoaBanco = pessoaRepositorio.findByEmailAndCodigoRecuperacaoSenha(pessoa.getEmail(),
                pessoa.getCodigoRecuperacaoSenha());
        if (pessoaBanco != null) {
            Date diferencaTempo = new Date(new Date().getTime() - pessoaBanco.getDataEnvioCodigo().getTime());
            if (diferencaTempo.getTime() / 1000 < 900) {
                pessoaBanco.setSenha(pessoa.getSenha());
                pessoaBanco.setCodigoRecuperacaoSenha(null);
                pessoaRepositorio.saveAndFlush(pessoaBanco);
                return "Senha alterada com sucesso!";
            } else {
                return "A validade do código expirou, solicite um novo código.";
            }
        } else {
            return "Email ou código não encontrado!";
        }
    }

    private String getCodigoRecuperacaoSenha(Long id) {
        DateFormat dateFormat = new SimpleDateFormat("ddMMyyyyHHmmssmm");
        return dateFormat.format(new Date()) + id;
    }

}
