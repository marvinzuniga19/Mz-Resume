const cargar = async (id, archivo) => {
  const res = await fetch(archivo);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
};

cargar("perfil", "sections/perfil.html");
cargar("experiencia", "sections/experiencia.html");
cargar("educacion", "sections/educacion.html");
cargar("formacion", "sections/formacion.html");
cargar("habilidades", "sections/habilidades.html");
