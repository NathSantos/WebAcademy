import { Prof, Tecnologia } from './helpersTypes';

export function listProfs(profs: Prof[]) {
    const list = profs.map( p => `<li>${p.nome} - ${p.sala}</li>`);
    return `<ul>${list.join('')}</ul>`;
}

export function listTecnologias(tecnologias: Tecnologia[]) {
    const list = tecnologias.map( p => {
        if (p.poweredByNodejs) {
            return `<li>${p.nome} - ${p.tipo}</li>`;
        } 
    });
    return `<ul>${list.join('')}</ul>`;
}