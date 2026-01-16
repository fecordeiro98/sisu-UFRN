let curso;
let area;
let corte;

fetch('dados.json')
    .then(response => {
        if (!response.ok) {
            throw new Error (`Erro ao carregar o arquivo: ${response.status} ${response.statusText}`);
        }
        return response.json();
    })
    .then(dadosJson => {
        curso = dadosJson.curso;
        area = dadosJson.area;
        corte = dadosJson.materias;
        console.log('Dados JSON carregados com sucesso!');
    })
    .catch(error => {
        console.error('Erro ao carregar ou processar "dados.json": ', error);
    });

function mediaEnem() {
    let notaCH = parseFloat(document.getElementById('chu').value);
    let notaCN = parseFloat(document.getElementById('cna').value);
    let notaLi = parseFloat(document.getElementById('lin').value);
    let notaMa = parseFloat(document.getElementById('mat').value);
    let notaRe = parseFloat(document.getElementById('red').value);
    
    let soma = notaCH + notaCN + notaLi + notaMa + notaRe;
    let media = soma / 5;
    
    document.getElementById('men').value = media.toFixed(2);
}

function mediaPesos() {
    let selecao = document.getElementById('curso').value;
    let cursoSel = curso[selecao];
    
    let notaCH = parseFloat(document.getElementById('chu').value);
    let notaCN = parseFloat(document.getElementById('cna').value);
    let notaLi = parseFloat(document.getElementById('lin').value);
    let notaMa = parseFloat(document.getElementById('mat').value);
    let notaRe = parseFloat(document.getElementById('red').value);
    
    let media;
    
    if (cursoSel) {
        let areaSel = cursoSel.area;
        let pesos = area[areaSel];

        if (pesos) {
            media = ((notaCH * pesos.chum) + (notaCN * pesos.cnat) + (notaLi * pesos.ling) + (notaMa * pesos.matem) + (notaRe * pesos.redac)) / (pesos.chum + pesos.cnat + pesos.ling + pesos.matem + pesos.redac);

        } else {
            alert('Área não encontrada para o curso selecionado');
        };
    } else {
        alert('Curso não encontrado');
    };
    
    document.getElementById('mcu').value = media.toFixed(2);
}

function valoresMinimos() {
    if (!corte) {
        console.error('Os dados JSON não foram carregados');
        return;
    }

    corte.forEach(materia => {
        const elemento = document.getElementById(materia.id);
        
        if (elemento) {
            const nota = parseFloat(elemento.value) || 0;

            if (nota < materia.corte) {
                alert(`Infelizmente a nota de ${materia.nome} está abaixo da nota de corte (${materia.corte})`);
            }
        } else {
            console.warn(`Elemento com ID "${materia.id}" não encontrado no HTML`);
        }
    });
}

function calcular() {
    mediaEnem();
    mediaPesos();
    valoresMinimos();
}