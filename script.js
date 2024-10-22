const curso = {
    'admin': {area: 'hum1'},
    'admpu': {area: 'hum1'},
    'adsis': {area: 'tec2'},
    'arqur': {area: 'tec1'},
    'artvi': {area: 'hum2'},
    'bibli': {area: 'hum2'},
    'biome': {area: 'biom'},
    'ccomp': {area: 'tec2'},
    'catua': {area: 'tec2'},
    'cbiol': {area: 'biom'},
    'ccont': {area: 'hum1'},
    'cecon': {area: 'hum1'},
    'csoci': {area: 'hum2'},
    'audio': {area: 'hum2'},
    'pubpr': {area: 'hum2'},
    'desig': {area: 'hum2'},
    'direi': {area: 'hum2'},
    'ecolo': {area: 'biom'},
    'edufi': {area: 'biom'},
    'enfer': {area: 'biom'},
    'eagro': {area: 'tec2'},
    'eambi': {area: 'tec2'},
    'ebiom': {area: 'tec2'},
    'ecivi': {area: 'tec2'},
    'ecomp': {area: 'tec2'},
    'ealim': {area: 'tec2'},
    'eaqui': {area: 'biom'},
    'emate': {area: 'tec2'},
    'epetr': {area: 'tec2'},
    'eprod': {area: 'tec2'},
    'etele': {area: 'tec2'},
    'eelet': {area: 'tec2'},
    'eflor': {area: 'tec2'},
    'emecn': {area: 'tec2'},
    'emect': {area: 'tec2'},
    'equim': {area: 'tec2'},
    'etext': {area: 'tec2'},
    'estat': {area: 'tec2'},
    'farma': {area: 'biom'},
    'filos': {area: 'hum2'},
    'fisic': {area: 'tec2'},
    'fisio': {area: 'biom'},
    'fonoa': {area: 'biom'},
    'geofi': {area: 'tec2'},
    'geogr': {area: 'hum2'},
    'geolo': {area: 'tec2'},
    'gpopu': {area: 'hum2'},
    'gehos': {area: 'biom'},
    'histo': {area: 'hum2'},
    'ciete': {area: 'tec2'},
    'human': {area: 'hum2'},
    'jorna': {area: 'hum2'},
    'espan': {area: 'hum2'},
    'franc': {area: 'hum2'},
    'ingle': {area: 'hum2'},
    'portu': {area: 'hum2'},
    'porin': {area: 'hum2'},
    'matem': {area: 'tec2'},
    'medic': {area: 'biom'},
    'meteo': {area: 'tec2'},
    'nutri': {area: 'biom'},
    'odont': {area: 'biom'},
    'pedag': {area: 'hum2'},
    'psico': {area: 'hum2'},
    'quimi': {area: 'tec2'},
    'qpetr': {area: 'tec2'},
    'relin': {area: 'hum2'},
    'scole': {area: 'biom'},
    'serso': {area: 'hum2'},
    'sisin': {area: 'tec2'},
    'teatr': {area: 'tec2'},
    'tecin': {area: 'tec2'},
    'turis': {area: 'hum1'},
    'zoote': {area: 'biom'},
}
const area = {
    'biom': {cnat: 3, chum: 1.5, ling: 1.5, matem: 1, redac: 1.5},
    'hum1': {cnat: 1, chum: 2, ling: 2, matem: 2, redac: 1.5},
    'hum2': {cnat: 1, chum: 2.5, ling: 2.5, matem: 1, redac: 1.5},
    'tec1': {cnat: 2, chum: 2, ling: 1, matem: 2, redac: 1.5},
    'tec2': {cnat: 2, chum: 1, ling: 1, matem: 3, redac: 1.5}
}

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

function calcular() {
    mediaEnem();
    mediaPesos();
}