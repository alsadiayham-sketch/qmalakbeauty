var SEED_PRODUCTS = [
    { id: 1, name: 'لوشن الجسم المرطب', brand: 'Q Malak', category: 'لوشن', sizes: [{ size: '250', unit: 'ml', price: 55 }, { size: '500', unit: 'ml', price: 85 }], discount: 0, image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop', status: 'bestseller' },
    { id: 2, name: 'كريم مرطب للوجه', brand: 'Q Malak', category: 'كريمات', sizes: [{ size: '50', unit: 'ml', price: 45 }, { size: '100', unit: 'ml', price: 75 }], discount: 0, image: 'https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?w=400&h=400&fit=crop', status: 'bestseller' },
    { id: 3, name: 'واقي شمس SPF50', brand: 'Q Malak', category: 'واقي شمس', sizes: [{ size: '50', unit: 'ml', price: 40 }, { size: '100', unit: 'ml', price: 65 }], discount: 0, image: 'https://images.unsplash.com/photo-1532947974-1cb1fbd48f30?w=400&h=400&fit=crop', status: 'normal' },
    { id: 4, name: 'سيروم فيتامين سي', brand: 'Q Malak', category: 'سيروم', sizes: [{ size: '30', unit: 'ml', price: 60 }], discount: 0, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop', status: 'special' },
    { id: 5, name: 'غسول الوجه الرغوي', brand: 'Q Malak', category: 'غسول', sizes: [{ size: '150', unit: 'ml', price: 35 }, { size: '250', unit: 'ml', price: 50 }], discount: 0, image: 'https://images.unsplash.com/photo-1556228841-a3c527ebefe5?w=400&h=400&fit=crop', status: 'normal' },
    { id: 6, name: 'كريم ليلي مغذي', brand: 'Q Malak', category: 'كريمات', sizes: [{ size: '50', unit: 'ml', price: 55 }], discount: 0, image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop', status: 'bestseller' },
    { id: 7, name: 'تونر ماء الورد', brand: 'Q Malak', category: 'تونر', sizes: [{ size: '150', unit: 'ml', price: 30 }, { size: '250', unit: 'ml', price: 45 }], discount: 0, image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop', status: 'normal' },
    { id: 8, name: 'سيروم حمض الهيالورونيك', brand: 'Q Malak', category: 'سيروم', sizes: [{ size: '30', unit: 'ml', price: 65 }], discount: 0, image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=400&h=400&fit=crop', status: 'special' },
    { id: 9, name: 'كريم تفتيح البشرة', brand: 'Q Malak', category: 'كريمات', sizes: [{ size: '50', unit: 'ml', price: 50 }, { size: '100', unit: 'ml', price: 80 }], discount: 0, image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop', status: 'normal' },
    { id: 10, name: 'زيت الأرغان للشعر', brand: 'Q Malak', category: 'زيوت', sizes: [{ size: '50', unit: 'ml', price: 45 }, { size: '100', unit: 'ml', price: 70 }], discount: 0, image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop', status: 'normal' },
    { id: 11, name: 'ماسك الطين الطبيعي', brand: 'Q Malak', category: 'ماسكات', sizes: [{ size: '100', unit: 'g', price: 35 }, { size: '200', unit: 'g', price: 55 }], discount: 0, image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop', status: 'normal' },
    { id: 12, name: 'كريم اليدين بالجليسرين', brand: 'Q Malak', category: 'كريمات', sizes: [{ size: '75', unit: 'ml', price: 25 }], discount: 0, image: 'https://images.unsplash.com/photo-1585652757141-8837d027aa04?w=400&h=400&fit=crop', status: 'normal' },
    { id: 13, name: 'مقشر الجسم بالسكر', brand: 'Q Malak', category: 'مقشرات', sizes: [{ size: '200', unit: 'g', price: 40 }, { size: '350', unit: 'g', price: 60 }], discount: 0, image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=400&h=400&fit=crop', status: 'bestseller' },
    { id: 14, name: 'جل الصبار المهدئ', brand: 'Q Malak', category: 'جل', sizes: [{ size: '150', unit: 'ml', price: 30 }, { size: '250', unit: 'ml', price: 45 }], discount: 0, image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=400&h=400&fit=crop', status: 'normal' },
    { id: 15, name: 'كريم العين مضاد للتجاعيد', brand: 'Q Malak', category: 'كريمات', sizes: [{ size: '15', unit: 'ml', price: 45 }], discount: 0, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop', status: 'special' },
    { id: 16, name: 'بخاخ ماء الورد المنعش', brand: 'Q Malak', category: 'تونر', sizes: [{ size: '100', unit: 'ml', price: 25 }, { size: '200', unit: 'ml', price: 40 }], discount: 0, image: 'https://images.unsplash.com/photo-1629198688000-71f23e745571?w=400&h=400&fit=crop', status: 'normal' },
    { id: 17, name: 'زبدة الشيا للجسم', brand: 'Q Malak', category: 'لوشن', sizes: [{ size: '150', unit: 'g', price: 40 }, { size: '300', unit: 'g', price: 65 }], discount: 0, image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop', status: 'normal' },
    { id: 18, name: 'سيروم الريتينول', brand: 'Q Malak', category: 'سيروم', sizes: [{ size: '30', unit: 'ml', price: 70 }], discount: 0, image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=400&fit=crop', status: 'normal' },
    { id: 19, name: 'كريم القدمين المرطب', brand: 'Q Malak', category: 'كريمات', sizes: [{ size: '75', unit: 'ml', price: 20 }, { size: '150', unit: 'ml', price: 35 }], discount: 0, image: 'https://images.unsplash.com/photo-1601049676869-702ea24cfd58?w=400&h=400&fit=crop', status: 'normal' },
    { id: 20, name: 'مجموعة العناية الكاملة', brand: 'Q Malak', category: 'مجموعات', sizes: [{ size: '1', unit: 'قطعة', price: 180 }], discount: 10, image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=400&fit=crop', status: 'special' },
    { id: 21, name: 'بلسم الشفاه بالعسل', brand: 'Q Malak', category: 'كريمات', sizes: [{ size: '10', unit: 'g', price: 15 }], discount: 0, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop', status: 'normal' },
    { id: 22, name: 'ماسك الكولاجين', brand: 'Q Malak', category: 'ماسكات', sizes: [{ size: '5', unit: 'قطعة', price: 30 }], discount: 0, image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop', status: 'bestseller' }
];

var SEED_DISCOUNTS = [];

var SEED_SETTINGS = {
    whatsappNumber: '972569236758',
    heroSubtitle: 'منتجات عناية بالبشرة والجسم بأعلى جودة',
    aboutText: 'Q Malak Beauty - متجر متخصص بمنتجات العناية بالبشرة والجسم.\nنقدم مجموعة واسعة من الكريمات والمستحضرات الطبيعية عالية الجودة.\nمنتجاتنا مناسبة لجميع أنواع البشرة مع توصيل لكل المناطق.',
    instagramLink: 'https://www.instagram.com/qmalakbeauty/',
    tiktokLink: ''
};

function seedFirestoreData(forceOverwrite) {
    var db = firebase.firestore();
    var projectId = 'qmalakbeauty';
    var batch = db.batch();

    SEED_PRODUCTS.forEach(function(product) {
        var ref = db.collection('projects').doc(projectId).collection('products').doc(String(product.id));
        batch.set(ref, product);
    });

    SEED_DISCOUNTS.forEach(function(discount) {
        var ref = db.collection('projects').doc(projectId).collection('discounts').doc(String(discount.id));
        batch.set(ref, discount);
    });

    var settingsRef = db.collection('projects').doc(projectId).collection('settings').doc('general');
    batch.set(settingsRef, SEED_SETTINGS);

    return batch.commit().then(function() {
        console.log('Seeded ' + SEED_PRODUCTS.length + ' products successfully!');
        return SEED_PRODUCTS.length;
    });
}

if (typeof window !== 'undefined') {
    window.seedFirestoreData = seedFirestoreData;
}
