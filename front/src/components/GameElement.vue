<template>
    <div class="card card-anim bg-dark text-white p-2 col-3 m-2">
        <h5 class="card-title">{{ title }}</h5>
        <img class="card-img-top p-2 pb-0" :src="'http://localhost:8080/files/'+title+'/'+title+'_1.jpg'" alt="image du jeu">
        <p class="status"><span class="led_status st_orange" v-if="status == 'En développement'"> &#x2981; </span><span class="led_status st_green" v-else-if="status == 'Disponible'"> &#x2981; </span>{{ status }}</p>
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
  props: ['title','description', 'status']
}
</script>

<style>
.status {
  font-size: 0.8em; 
  font-style: italic;
}
.led_status {
  position: relative;
  font-size: 1.8em;
  font-style: normal;
  bottom: -3px;
}
.st_orange {
  color: orange; 
}
.st_green {
  color: green; 
}
.card-anim {
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
  transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
  padding: 14px 80px 18px 36px;
  cursor: pointer;
}
.card-anim:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
  transition: 0.3s;
}
</style>