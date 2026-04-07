const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

(async () => {
  const productId = 'prod_UIDZbbkxBhEgtV';
  const priceId = 'price_1TJd8NGu5alzgvk89LfsO0DC';

  await stripe.products.update(productId, {
    default_price: priceId,
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

  const product = await stripe.products.retrieve(productId, { expand: ['default_price'] });
  console.log(JSON.stringify({
    productId: product.id,
    name: product.name,
    defaultPrice: product.default_price && product.default_price.id,
    metadata: product.metadata
  }, null, 2));
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
