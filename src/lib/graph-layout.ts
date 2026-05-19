export type GraphNodeInput = {
    id: string;
    width: number;
    height: number;
};

export type GraphNodeLayout = GraphNodeInput & {
    x: number;
    y: number;
};

type CircularLayoutOptions = {
    width: number;
    height: number;
    centerX: number;
    centerY: number;
    minRadius: number;
    maxRadius: number;
    radiusStep: number;
    margin: number;
    gap: number;
    rotationSamples?: number;
};

const getPositions = (count: number, radius: number, startAngle: number, centerX: number, centerY: number) =>
    Array.from({length: count}, (_, index) => {
        const angle = startAngle + (index * 2 * Math.PI) / count;

        return {
            x: centerX + Math.cos(angle) * radius,
            y: centerY + Math.sin(angle) * radius,
        };
    });

const isInsideBounds = (nodes: GraphNodeLayout[], options: CircularLayoutOptions) =>
    nodes.every((node) => (
        node.x - node.width / 2 >= options.margin &&
        node.x + node.width / 2 <= options.width - options.margin &&
        node.y - node.height / 2 >= options.margin &&
        node.y + node.height / 2 <= options.height - options.margin
    ));

const hasOverlap = (nodes: GraphNodeLayout[], gap: number) => {
    for (let firstIndex = 0; firstIndex < nodes.length; firstIndex += 1) {
        for (let secondIndex = firstIndex + 1; secondIndex < nodes.length; secondIndex += 1) {
            const first = nodes[firstIndex];
            const second = nodes[secondIndex];
            const overlapsX = Math.abs(first.x - second.x) < (first.width + second.width) / 2 + gap;
            const overlapsY = Math.abs(first.y - second.y) < (first.height + second.height) / 2 + gap;

            if (overlapsX && overlapsY) {
                return true;
            }
        }
    }

    return false;
};

const getLayoutPenalty = (nodes: GraphNodeLayout[], options: CircularLayoutOptions) => {
    const overlapPenalty = nodes.reduce((penalty, first, firstIndex) => {
        const pairPenalty = nodes.slice(firstIndex + 1).reduce((total, second) => {
            const overlapX = Math.max(0, (first.width + second.width) / 2 + options.gap - Math.abs(first.x - second.x));
            const overlapY = Math.max(0, (first.height + second.height) / 2 + options.gap - Math.abs(first.y - second.y));
            return total + overlapX * overlapY;
        }, 0);

        return penalty + pairPenalty;
    }, 0);

    const boundsPenalty = nodes.reduce((penalty, node) => (
        penalty +
        Math.max(0, options.margin - (node.x - node.width / 2)) +
        Math.max(0, node.x + node.width / 2 - (options.width - options.margin)) +
        Math.max(0, options.margin - (node.y - node.height / 2)) +
        Math.max(0, node.y + node.height / 2 - (options.height - options.margin))
    ), 0);

    return overlapPenalty + boundsPenalty * 1000;
};

export const buildCircularNodeLayout = (
    nodes: GraphNodeInput[],
    options: CircularLayoutOptions,
) => {
    const angleStep = (2 * Math.PI) / nodes.length;
    const rotationSamples = options.rotationSamples ?? 16;
    const rotations = Array.from(
        {length: rotationSamples},
        (_, index) => -Math.PI / 2 + (index * angleStep) / rotationSamples,
    );
    let bestLayout: GraphNodeLayout[] | null = null;
    let bestPenalty = Number.POSITIVE_INFINITY;

    for (let radius = options.minRadius; radius <= options.maxRadius; radius += options.radiusStep) {
        for (const rotation of rotations) {
            const positions = getPositions(nodes.length, radius, rotation, options.centerX, options.centerY);
            const layout = nodes.map((node, index) => ({
                ...node,
                x: positions[index].x,
                y: positions[index].y,
            }));

            if (isInsideBounds(layout, options) && !hasOverlap(layout, options.gap)) {
                return layout;
            }

            const penalty = getLayoutPenalty(layout, options);
            if (penalty < bestPenalty) {
                bestLayout = layout;
                bestPenalty = penalty;
            }
        }
    }

    return bestLayout ?? [];
};
