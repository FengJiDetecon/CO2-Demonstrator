<template>
    <div class="details-list">
        <p class="detail-row">
          <span class="bold">Content title: </span>{{ this.title }}
        </p>
        <p class="detail-row">
          <span class="bold">Content description: </span>{{this.description}}
        </p>
        <p class="detail-row"><span class="bold">Owner: </span>{{this.owner}}</p>
        <p class="detail-row"><span class="bold">Last Access: </span>{{this.access}}</p>
        <p class="detail-row"><span class="bold">Format: </span> {{this.format}}</p>
        <p class="detail-row"><span class="bold">Last Update: </span>{{this.update}}</p>
        <p class="detail-row">
          <span class="bold">Dataspace Title: </span>{{this.dataspace}}
        </p>
        <p class="detail-row">
          <span class="bold">Dataspace Description: </span>{{this.dataspacedescription}}
        </p>
        <p class="detail-row"><span class="bold">Dataspace ID: </span>{{this.dataspaceid}}</p>
        <p class="detail-row">
          <span class="bold">Contact: </span>{{this.contact}}
        </p>
      </div>
</template>

<script>

export default {
    props: [
        "datadetails",
        "id"
    ],
    data(){
        return{
            title: null,
            description: null,
            owner: null,
            access: null,
            format: null,
            update: null,
            dataspace: null,
            dataspacedescription: null,
            dataspaceid: null,
            contact: null,
        }
    },
    mounted(){
        this.title = this.datadetails.ContentTitle[this.id]
        this.description = this.datadetails.ContentDescription[this.id]
        this.owner = this.datadetails.Owner[this.id]
        this.access = this.datadetails.LastAccess[this.id]
        this.format = this.datadetails.Format[this.id]
        this.update = this.datadetails.LastUpdate[this.id]
        this.dataspace = this.datadetails.Dataspace[this.id]
        this.dataspacedescription = this.datadetails.DataspaceDescription[this.id]
        this.dataspaceid = this.datadetails.DataspaceID[this.id]
        this.contact = this.datadetails.Contact[this.id]        
    }
}
</script>


<style scoped>

* {
  color: var(--mainblue);
}

.details-list {
  border-top: 1px solid var(--mainblue);
}
</style>