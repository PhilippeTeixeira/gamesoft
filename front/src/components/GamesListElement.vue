<template>
    <tr>
        <td>{{ title }}</td>
        <td>{{ releaseDate }}</td>
        <td>{{ score }}</td>
        <td><button class="btn btn-warning" type="button">Modifier</button></td>
        <td><button class="btn btn-danger" type="button">Supprimer</button></td>
    </tr>
</template>

<script>
export default {
  props: ['title','releaseDate', 'score']
}
</script>