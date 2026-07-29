import { defineHastPlugin, defineMdastPlugin } from 'satteri';

export const externalLinks = defineHastPlugin({
  name: 'external-links',
  element: {
    filter: ['a'],
    visit(node, ctx) {
      const href = node.properties.href;

      if (typeof href === 'string' && href.startsWith('http')) {
        ctx.setProperty(node, 'target', '_blank');
        ctx.setProperty(node, 'rel', 'noopener noreferrer');
        ctx.setProperty(node, 'class', 'external');
      }
    },
  },
});

export const asides = defineMdastPlugin({
  name: 'asides',
  containerDirective(node, ctx) {
    ctx.replaceNode(node, {
      type: 'containerDirective',
      name: node.name,
      data: { hName: 'aside', hProperties: { className: [node.name] } },
      children: node.children,
    });
  },
});
