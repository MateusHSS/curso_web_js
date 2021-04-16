// middleware pattern (chain of responsability)

const passo1 = (ctx, next) => {
    ctx.val1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.val2 = 'mid2',
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const exec_passo = indice => {
        middlewares && indice < middlewares.length && middlewares[indice](ctx, () => exec_passo(indice + 1))
    }

    exec_passo(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)

console.log(ctx)
