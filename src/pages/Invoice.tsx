
import React from 'react';

const Invoice = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Pro Forma Invoice */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Seydou Zidouemba</h2>
              <p className="text-gray-600">Développeur Web & Consultant Digital</p>
              <p className="text-gray-600">Lomé, Togo</p>
              <p className="text-gray-600">📞 +228 71303662 (WhatsApp) / +228 91511366</p>
              <p className="text-gray-600">📧 seydougsm1@gmail.com</p>
            </div>
            <div className="text-right">
              <h1 className="text-xl font-bold text-gray-900">Facture Pro Forma</h1>
              <p className="text-gray-600">N° : 2025-001</p>
              <p className="text-gray-600">Date : 19/04/2025</p>
            </div>
          </div>

          <div className="border-t border-gray-200 py-4">
            <p className="text-gray-600">À :</p>
            <p className="font-semibold">Cornerstone Briques</p>
            <p className="text-gray-600 mt-4">Durée de prestation : 3 mois</p>
          </div>

          <div className="mt-8">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="text-left text-gray-900 font-semibold">Description</th>
                  <th className="text-right text-gray-900 font-semibold">Montant (FCFA)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 text-gray-600">Conception du site web</td>
                  <td className="py-4 text-right text-gray-900">310 000</td>
                </tr>
                <tr>
                  <td className="py-4 text-gray-600">Solution de gestion de l'usine</td>
                  <td className="py-4 text-right text-gray-600">Inclus</td>
                </tr>
                <tr>
                  <td className="py-4 text-gray-600">Gestion et marketing des réseaux sociaux</td>
                  <td className="py-4 text-right text-gray-600">Inclus</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td className="pt-6 text-right font-bold">Montant total :</td>
                  <td className="pt-6 text-right font-bold">310 000 FCFA</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="mt-8 text-gray-600">
            <p className="font-semibold mb-2">Modalités de paiement flexibles :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Option 1 : Paiement en une fois (5% de réduction)</li>
              <li>Option 2 : Paiement en deux fois (50% à la signature, 50% à la livraison)</li>
              <li>Option 3 : Paiement en trois fois (40% à la signature, 30% au milieu du projet, 30% à la livraison)</li>
            </ul>
            <p className="mt-4">Validité de l'offre : 30 jours</p>
            <p className="text-blue-600">Un reçu officiel sera fourni pour chaque paiement effectué</p>
          </div>
        </div>

        {/* Engagement Letter */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Lettre d'engagement</h2>
          
          <p className="mb-4">À l'attention de Cornerstone Briques</p>
          
          <p className="font-semibold mb-4">Objet : Engagement de prestation</p>

          <div className="space-y-4 text-gray-600">
            <p className="text-lg font-medium text-gray-800 mb-6">
              En tant que développeur web passionné et expérimenté, je m'engage solennellement auprès de Cornerstone Briques à transformer votre vision en réalité digitale.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="font-medium text-blue-800 mb-4">Cette offre exclusive comprend :</p>
              <ul className="list-disc pl-6 space-y-3">
                <li className="text-blue-700">Un site web professionnel et moderne qui représentera parfaitement votre marque</li>
                <li className="text-blue-700">Une solution de gestion d'usine sur mesure pour optimiser vos opérations</li>
                <li className="text-blue-700">Une stratégie marketing complète pour vos réseaux sociaux</li>
              </ul>
            </div>

            <p className="mb-4">
              Je m'engage personnellement à livrer un travail d'excellence dans un délai de trois (03) mois, avec un investissement total de seulement 310 000 FCFA. Ce montant représente un excellent rapport qualité-prix pour une solution complète et professionnelle.
            </p>

            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <p className="font-medium text-green-800">Mes garanties :</p>
              <ul className="list-disc pl-6 space-y-2 mt-2 text-green-700">
                <li>Communication transparente et régulière sur l'avancement</li>
                <li>Respect strict des délais convenus</li>
                <li>Accompagnement personnalisé tout au long du projet</li>
                <li>Support technique après livraison</li>
              </ul>
            </div>

            <p className="text-gray-800 font-medium">
              Cette opportunité de collaboration est validée et garantie par Mr WALIOU ADEKU, qui atteste de mon professionnalisme et de la qualité de mon travail.
            </p>

            <p>Fait à Lomé, le 19/04/2025</p>

            <div className="grid grid-cols-2 gap-8 mt-8">
              <div>
                <p className="font-semibold">Signature du prestataire :</p>
                <p>Seydou Zidouemba</p>
              </div>
              <div>
                <p className="font-semibold">Signature du témoin :</p>
                <p>Mr WALIOU ADEKU</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Projets Web Précédents */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Projets Web Précédents</h2>
          
          <div className="space-y-4">
            <p className="text-gray-600 mb-4">
              Voici quelques-uns des projets web que j'ai développés ou auxquels j'ai contribué :
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Sortir BF</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">Site web complet : </p>
                  <p className="text-blue-600 break-all">https://sortir.bf/</p>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Un site web de référence pour les activités et sorties au Burkina Faso.
                </p>
              </div>

              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Jiji Côte d'Ivoire</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">Site web complet : </p>
                  <p className="text-blue-600 break-all">https://jiji.co.ci/</p>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Une plateforme de petites annonces en ligne pour la Côte d'Ivoire.
                </p>
              </div>

              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Djami</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">Site web complet : </p>
                  <p className="text-blue-600 break-all">https://djami.ci/</p>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Un site web dédié aux services et solutions numériques en Côte d'Ivoire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
