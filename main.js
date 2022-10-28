class User {
constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
}
    getFullName(){
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(mascota) {
        this.mascotas.push(mascota);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(nombre, autor) {
        this.libros.push({nombre: nombre, autor: autor});
    }

    getBookNames() {
        let arr = [];
        for (let i = 0; i < this.libros.length; i++) {
            arr.push(this.libros[i].nombre);
        }
        return arr;
    }

}

    let Antonio = new User("Antonio", "EddelWeisser", [
            {nombre: "Un tranvía llamado Deseo", autor: "Tennessee Williamson"},
            {nombre: "La Conjura de los Necios", autor: "John Kennedy Toole"}
        ], ["Mulciber", "Bullstrode", "Bastiansur"]);

        console.log(Antonio.getFullName());
        Antonio.addMascota("Numenor");
        console.log(Antonio.countMascotas());
        Antonio.addBook("El Cazador Oculto", "Sallinger");
        console.log(Antonio.getBookNames());