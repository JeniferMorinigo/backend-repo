class User {
    const(nombre, apellido, libros, mascotas){
        this.nombre= nombre;
        this.apellido= apellido;
        this.libros= libros;
        this.mascotas;
    }
    getFullName(){
        return`${this.nombre} ${this.apellido}`;
    }
    addMascotas(mascotas) {
        this.mascotas.push(mascotas);
    }
    countMascotas() {
        return this.mascotas.length;
    }
    addBook(nombre, autor){
        this.libros.push({nombre, autor});
    }
    getBookNames(){
        return this.libros.map(libros => libros.nombre);
    }
}
const User = new User ('luz',' morinigo',
[{nombre:'The Witcher:The Last Wish', autor:'Andrzej Sapkowski'}
],
['Chiquito el Pitbull', 'Roger el Golden']);
console.log('DTCON:listar nombres de libros previos', user.getBookNames())
User.addBook('Shadowhunters: City of Lost Souls', 'Cassandra Clare');
console.log('DTCON:listar nombres de libros posterior', user.getBookNames())
console.log('DTCON:contador de mascotas previo', user.countMascotas());
User.addMascotas('Chiquito el Pitbull')
console.log('DTCON: contador de mascotas final',user.countMascotas());
console.log('DTCON:nombre completo', user.getFullName());

