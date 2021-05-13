async function fetchUsers () {
       const res = await fetch('https://jsonplaceholder.typicode.com/photos')
       let data = await res.json();

       let head1 = data.find(item => item.id == 1)
       document.getElementById('title1').innerHTML = head1.title;
       document.getElementById('body1').innerHTML = head1.body;
       document.getElementById('url1').innerHTML = head1.url;

       let head2 = data.find(item => item.id == 2)
       document.getElementById('title2').innerHTML = head2.title;
       document.getElementById('body2').innerHTML = head2.body;
       document.getElementById('url2').innerHTML = head2.url;

       let head3 = data.find(item => item.id == 3)
       document.getElementById('title3').innerHTML = head3.title;
       document.getElementById('body3').innerHTML = head3.body;
       document.getElementById('url3').innerHTML = head3.url;

       let head4 = data.find(item => item.id == 4)
       document.getElementById('title4').innerHTML = head4.title;
       document.getElementById('body4').innerHTML = head4.body;
       document.getElementById('url4').innerHTML = head4.url;

       let head5 = data.find(item => item.id == 5)
       document.getElementById('title5').innerHTML = head5.title;
       document.getElementById('body5').innerHTML = head5.body;
       document.getElementById('url5').innerHTML = head5.url;

       let head6 = data.find(item => item.id == 6)
       document.getElementById('title6').innerHTML = head6.title;
       document.getElementById('body6').innerHTML = head6.body;
       document.getElementById('url6').innerHTML = head6.url;

       let head7 = data.find(item => item.id == 7)
       document.getElementById('title7').innerHTML = head7.title;
       document.getElementById('body7').innerHTML = head7.body;
       document.getElementById('url7').innerHTML = head7.url; 

       let head8 = data.find(item => item.id == 8)
       document.getElementById('title8').innerHTML = head8.title;
       document.getElementById('body8').innerHTML = head8.body;
       document.getElementById('url8').innerHTML = head8.url;

       let head9 = data.find(item => item.id == 9)
       document.getElementById('title9').innerHTML = head9.title;
       document.getElementById('body9').innerHTML = head9.body;
       document.getElementById('url9').innerHTML = head9.url;

       let head10 = data.find(item => item.id == 10)
       document.getElementById('title10').innerHTML = head10.title;
       document.getElementById('body10').innerHTML = head10.body;
       document.getElementById('url10').innerHTML = head10.url;
}