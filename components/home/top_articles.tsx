import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

const TopArticles = async () => {
  const articles = await prisma.articles.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      comments: true,
      author: {
        select: {
          name: true,
          email: true,
          imageUrl: true,
        },
      },
    },
  });

  return (
    // <div className="grid gird-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    //   {
    //     articles.slice(0, 3).map((article) => (
    //       <Card
    //         className={cn(
    //           "group relative overflow-hidden transition-all hover:scale-[1.02]",
    //           "border border-gray-200/50 dark:border-white/10",
    //           "bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg"
    //         )}
    //         key={article.id}
    //       >
    //         <div className="p-6">
    //           <Link href={`/articles/${article.id}`}>
    //             {/* Image Container */}
    //             <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl">
    //               <Image
    //                 src={article.featureImage}
    //                 alt="article"
    //                 fill
    //                 className="object-cover"
    //               />
    //             </div>

    //             {/* Author Info */}
    //             <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
    //               <Avatar className="h-8 w-8">
    //                 <AvatarImage src={article.author.imageUrl || ""} />
    //                 <AvatarFallback>
    //                   CN
    //                 </AvatarFallback>
    //               </Avatar>
    //               <span>{article.author.name}</span>
    //             </div>

    //             {/* Article Title */}
    //             <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
    //               {article.title}
    //             </h3>
    //             <p className="mt-2 text-gray-600 dark:text-gray-300">
    //               {article.category}
    //             </p>

    //             {/* Article Meta Info */}
    //             <div className="mt-6 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
    //               <span>{article.createdAt.toDateString()}</span>
    //               <span>{12} min read</span>
    //             </div>
    //           </Link>
    //         </div>
    //       </Card>
    //     ))
    //   }

    // </div>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {articles.slice(0, 3).map((article) => (
      <Card
        key={article.id}
        className={cn(
          "group relative overflow-hidden transition-all hover:scale-[1.02]",
          "border border-gray-200/50 dark:border-white/10",
          "bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg"
        )}
      >
        <div className="p-5">
          <Link href={`/articles/${article.id}`}>
            {/* Image Container */}
            <div className="relative mb-3 h-40 w-full overflow-hidden rounded-xl">
              <Image
                src={article.featureImage}
                alt="article"
                fill
                className="object-cover"
              />
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Avatar className="h-7 w-7">
                <AvatarImage src={article.author.imageUrl || ""} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span>{article.author.name}</span>
            </div>

            {/* Article Title */}
            <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">
              {article.title}
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              {article.category}
            </p>

            {/* Meta Info */}
            <div className="mt-5 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>{article.createdAt.toDateString()}</span>
              <span>12 min read</span>
            </div>
          </Link>
        </div>
      </Card>
    ))}
  </div>
</div>


  );
}

export default TopArticles





//
// <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//   {[1, 2, 3].map((_, index) => (
//     <Card
//       key={index}
//       className={cn(
//         "group relative overflow-hidden transition-all hover:scale-[1.02]",
//         "border border-gray-200/50 dark:border-white/10",
//         "bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg"
//       )}
//     >
//       <div className="p-6">
//         <Link href={`/articles/${1234}`}>
//           {/* Image Container */}
//           <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl">
//             <Image
//               src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybCUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D"
//               alt="article"
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* Author Info */}
//           <div className="flex items-center gap-3 text-sm text-muted-foreground">
//             <Avatar className="h-8 w-8">
//               <AvatarImage src="" />
//               <AvatarFallback>CN</AvatarFallback>
//             </Avatar>
//             <span>Tarang Patel</span>
//           </div>

//           {/* Article Title */}
//           <h3 className="mt-4 text-xl font-semibold text-foreground">
//             Full Stack Development
//           </h3>
//           <p className="mt-2 text-muted-foreground">
//             Web development
//           </p>

//           {/* Meta Info */}
//           <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
//             <span>12fab</span>
//             <span>12 min read</span>
//           </div>
//         </Link>
//       </div>
//     </Card>
//   ))}
// </div>