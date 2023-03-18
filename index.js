const users = [
    {
      first_name: 'Mike',
      location: 'London'
    },
    {
      first_name: 'Tim',
      location: 'US'
    },
    {
      first_name: 'John',
      location: 'Australia'
    }
  ];
  let result=users.map(function(value){
    return `${value.first_name} lives in ${value.location}`;
});
    console.log(result);