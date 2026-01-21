
export const loadImage = (path: string) => {
    const imageMap: Record<string, any> = {};
    
    const context = require.context('../assets/images', false, /\.(png|jpg|jpeg)$/);
    context.keys().forEach((key: string) => {
        const fileName = key.replace('./', '');
        imageMap[`/assets/images/${fileName}`] = context(key);
    });
    
    return imageMap[path];
};


