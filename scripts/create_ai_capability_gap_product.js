const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

(async () => {
  const existing = await stripe.products.search({
    query: "metadata['slug']:'ai-capability-gap-diagnostic' AND active:'true'",
  }).catch(() => ({ data: [] }));

  let product = existing.data && existing.data[0];
  if (!product) {
    product = await stripe.products.create({
      name: 'AI Capability Gap Diagnostic',
      description: 'Questionnaire + written capability map and gap summary + 20 minute review call delivered within 48 hours.',
      metadata: {
        slug: 'ai-capability-gap-diagnostic',
        category: 'diagnostic',
        funnel_step: 'entry_offer',
        launch_price: '197',
        standard_price: '297'
      }
    });
  }

  const prices = await stripe.prices.list({ product: product.id, active: true, limit: 10 });
  let price = prices.data.find((p) => p.unit_amount === 19700 && p.currency === 'usd' && p.type === 'one_time');
  if (!price) {
    price = await stripe.prices.create({
      product: product.id,
      unit_amount: 19700,
      currency: 'usd'
    });
  }

  console.log(JSON.stringify({
    productId: product.id,
    priceId: price.id,
    orderPath: '/order/ai-capability-gap-diagnostic'
  }, null, 2));
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
