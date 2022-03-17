<template>
    <div style="display: flex; flex-direction: row;">
        <div style="display: flex; justify-content: center">
            <form action="" class="parent" :style="{display:'flex', flexGrow: 1, width: parseInt(allWidth)+'px'}">

                <input :style="{flexGrow:1,flexShrink:1, width:parseInt(inputWidth)+'px', height: parseInt(Height)+'px',border: 1+'px '+'solid '+inputBorderColor}" type="text">

                <input :style="{flexGrow:1,flexShrink:1,width:parseInt(buttonWidth)+'px', height: (parseInt(Height))+'px', background: buttonColor, border: 1+'px '+'solid '+buttonBorderColor, color: '#fff'}" type="button" value="搜索">

            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchInput",
        props:{
            allWidth:{
                type: String,
                default:'500',
            },
            Height:{
                type: String,
                default:'40',
            },
            inputWidth:{
                type: String,
                default:'400',
            },
            buttonWidth:{
                type: String,
                default:'80',
            },
            buttonColor:{
                type: String,
                default: '#317ef3'
            },
            buttonBorderColor:{
                type: String,
                default: '#317ef3'
            },
            inputBorderColor:{
                type: String,
                default: '#ccc'
            }
        }
    }
</script>

<style scoped>


</style>