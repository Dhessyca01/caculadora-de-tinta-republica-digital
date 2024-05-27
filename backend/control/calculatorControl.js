const calculatorSchema = require('../validations/calculatorSchemas');

const calcularParede = (largura, altura, nPortas, nJanelas) => {
    let areaParede = altura * largura;

    const areaJanelas = nJanelas * (2.00 * 1.20);
    const areaPortas = nPortas * (0.80 * 1.90);

    if (nPortas > 0 && altura < 2.20) {
        throw new Error('A altura das paredes com portas deve ser, no mínimo, 30 centímetros maior que a altura da porta. Tente novamente.');
    }

    const areaTotalAberturas = areaJanelas + areaPortas;
    if (areaTotalAberturas > areaParede / 2) {
        throw new Error('Opa! O total de área das portas e janelas não deve ser no máximo 50% da área de parede');
    }

    areaParede -= areaTotalAberturas;
    return areaParede;
};

const validateInput = async (data) => {
    try {
        await calculatorSchema.validate(data, { abortEarly: false });
    } catch (error) {
        throw new Error(error.errors.join(' '));
    }
};

const calculatePaint = async (req, res) => {
    try {
        await validateInput(req.body);

        const { paredes } = req.body;
        let areaTotal = 0;

        paredes.forEach(parede => {
            const area = calcularParede(parede.largura, parede.altura, parede.nJanelas, parede.nPortas);
            areaTotal += area;
        });

        const litrosNecessarios = areaTotal / 5;

        const latasDisponiveis = [18, 3.6, 2.5, 0.5];
        const latas = [];
        let restante = litrosNecessarios;

        latasDisponiveis.forEach(lata => {
            if (restante >= lata) {
                const qtd = Math.floor(restante / lata);
                if (qtd > 0) {
                    latas.push({ tamanho: lata, quantidade: qtd });
                    restante -= qtd * lata;
                }
            }
        });

        if (restante > 0) {
            latas.push({ tamanho: 0.5, quantidade: Math.ceil(restante / 0.5) });
        }

        return res.status(200).json({ message: 'Cálculo para a quantidade de tinta realizado com sucesso!', latas, litrosNecessarios });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

module.exports = {
    calculatePaint
};
