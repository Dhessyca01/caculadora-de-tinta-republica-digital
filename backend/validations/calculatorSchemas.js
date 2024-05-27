const yup = require('yup');

const calculatorSchema = yup.object().shape({
    paredes: yup.array().of(
        yup.object().shape({
            largura: yup.number().required('Informe a largura.'),
            altura: yup.number().required('Informe a altura.'),
            qtdJanelas: yup.number().required('Informe a quantidade de janelas.'),
            qtdPortas: yup.number().required('Informe a quantidade de portas.')
        })
    ).required('Informe as áreas da parede corretamente.')
});

module.exports = calculatorSchema;
