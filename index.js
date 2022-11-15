class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
 return string.replace(/[^A-Za-z0-9- ']+/g, '')

  }

  static titleize(string){
    const str = string.split(" ");

    for (let i = 0; i < str.length; i++) {
      if(str[i] != 'a' && str[i] != 'an' && str[i] != 'the' && str[i] != 'but' && str[i] != 'of' && str[i] != 'and' && str[i] != 'for' && str[i] != 'at' && str[i] != 'by' && str[i] != 'from')

        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
        str[0] = str[0][0].toUpperCase() + str[0].substr(1);

    }

   return str.join(" ");
  }
}