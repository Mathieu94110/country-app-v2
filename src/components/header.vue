

<script>
export default {
  name: 'Header',

}
</script>

<template>
  <div className="header-container">
      <h1 className="home-title">Where in the world?</h1>
      <div className="mode-container">
     <font-awesome-icon icon="moon" color="gray" /> 
            <h2 className="mode-title">Dark Mode</h2>
      
      </div>
    </div>
</template>
<style scoped>

.header-container{
    height: 64px;
    background-color: var(--element);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px ;
    box-shadow:#3c404326 0px 1px 1px 1px;
  

}
      .home-title{
    color: var(--text);
    max-width: 50%;
}
.mode-container{
    display: flex;
    align-items: center;

 
}
  .mode-container >h2{
        font-weight: 600;
        padding-left: 10px;
        font-size: 16px;
    }
@media (min-width: 605px){
.header-container{
    padding: 0 40px ;
}
       .home-title{
    font-size: 22px;
}
.mode-container{
    >h2{
        font-size: 22px;
    }
}
}
</style>