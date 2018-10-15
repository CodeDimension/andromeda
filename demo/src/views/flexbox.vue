<template>
    <div class="anx-row container">
        <div class="sidenav anx-column anx-30">
            Sidenav
        </div>

        <div class="anx-column anx-70">
            <div class="anx-row toolbar anx-10">
                Toolbar
            </div>
            <div class="anx-row content anx-90">
                Toolbar
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.container {
  height: 100%;
}

.sidenav {
  background: blue;
}
.toolbar {
  background: red;
}
.content {
  background: gray;
}
</style>

