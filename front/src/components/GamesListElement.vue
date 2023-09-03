<template>
    <tr>
        <td>{{ title }}</td>
        <td>{{ releaseDate }}</td>
        <td>{{ score }}</td>
        <td><router-link :to="{ name: 'ModifyGamePage', params: { title: title } }"><button class="btn btn-warning" type="button">Modifier</button></router-link></td>
        <td><button class="btn btn-danger" type="button">Supprimer</button></td>
    </tr>
</template>

<script>

export default {
    props: ['title', 'releaseDate', 'score']
}
</script>