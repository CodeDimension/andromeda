<template>
    <div>
        <h1>Sem color</h1>
        <div>
            <input type="text" class="an-input" placeholder="placeholder">
        </div>

        <h1>Sem color e desabilitado</h1>

        <div>
            <input type="text" id="with-label" class="an-input" placeholder="placeholder" disabled>
        </div>

        <h1>Com label e msg</h1>

        <div class="an-field-border an-field-danger">
            <label class="an-field-label" for="with-label">A nice label </label>

            <input type="text" id="with-label" class="an-input" placeholder="placeholder">

            <div class="an-field-msg">
                Algum erro
            </div>
        </div>

        <h1>Com cor</h1>

        <div class="an-field-primary">
            <input type="text" class="an-input" placeholder="Primary">
        </div>

        <div class="an-field-secondary">
            <input type="text" class="an-input" placeholder="Secondary">
        </div>

        <div class="an-field-success">
            <input type="text" class="an-input" placeholder="Success">
        </div>

        <div class="an-field-warn">
            <input type="text" class="an-input an-field-warn" placeholder="Warn">
        </div>

        <div class="an-field-danger">
            <input type="text" class="an-input an-field-danger" placeholder="Danger">
        </div>

        <div class="an-field-info">
            <input type="text" class="an-input an-field-info" placeholder="Info">
        </div>
    </div>
</template>
