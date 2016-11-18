<template>
  <section class="section">
    <div class="container">
      <label class="label">Title</label>
      <p class="control">
        <input id="title" class="input" type="text" placeholder="Post Title">
      </p>
      <label class="label">Description</label>
      <p class="control">
        <input id="description" class="input" type="text" placeholder="Post Description">
      </p>        
      <label class="label">Content</label>
      <p class="control">
        <textarea id="content" class="textarea" placeholder="Post Content"></textarea>
      </p>
      <p class="control">
        <button id="submit" class="button is-primary">Submit</button>
      </p>          
    </div>
  </section>	
</template>
<script>
export default {
	data(){
		return {}
	},
	created(){
		this.$agent.get('http:localhost:3000/api/posts')
		.then(res => {
      console.log(res)
		})		
	}
}
</script>