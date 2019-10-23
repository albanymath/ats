\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{UAmathtalk}[2019/10/23 UAlbany math talk class]
\ProvidesFile{UAlogo.png}
\RequirePackage{etoolbox}
\newcommand*{\address}[1]{\gdef\@address{#1}}
\newcommand*{\urladdr}[1]{\gdef\@urladdr{#1}}
\renewcommand*{\do}[1]{\csgdef{#1}{}}
\docsvlist{event, eventurl, when, where, moreinfo, announcer}
\DeclareOption{seminar}{%
  \renewcommand*{\event}{Algebra/Topology Seminar}%
  \renewcommand*{\eventurl}{https://www.albany.edu/~mv312143/seminar/}%
  \renewcommand*{\when}{1:15 p.m.}%
  \renewcommand*{\where}{ES-143}%
  \renewcommand*{\announcer}{Marco Varisco}%
}
\DeclareOption{colloquium}{%
  \renewcommand*{\event}{Colloquium}%
  \renewcommand*{\eventurl}{https://www.albany.edu/math/colloquium.shtml}%
  \renewcommand*{\when}{3:00 p.m.}%
  \renewcommand*{\where}{ES-143}%
  \renewcommand*{\moreinfo}{(tea \&\ coffee at 2:30 p.m.\ in ES-152)}%
  \renewcommand*{\announcer}{Marco Varisco}%
}
\DeclareOption*{\ClassWarningNoLine{UAmathtalk}
  {Unknown option `\CurrentOption'.\MessageBreak Using default option `seminar'}
}
\ExecuteOptions{seminar}
\ProcessOptions
\newcommand{\headerfont}[1]{\textsf{\textbf{\footnotesize#1}}}
\newcommand{\eventfont} [1]{\textsf{\huge#1}}
\newcommand{\titlefont} [1]{\textsc{\LARGE#1}}
\newcommand*{\abstractsize}{\large}
\LoadClass[12pt]{article}
\RequirePackage[empty]{fullpage}
\RequirePackage{amssymb}
\RequirePackage{mathtools}
\RequirePackage{fontspec}
\RequirePackage{microtype}
\RequirePackage{hyperref}
\IfFontExistsTF{Helvetica Neue}%
  {\setsansfont{Helvetica Neue}}%
  {\IfFontExistsTF{Arial}{\setsansfont{Arial}}{}}
\newcommand*{\header}{%
  \noindent%
  \IfFileExists{UAlogo.png}{%
    \hspace{-27pt}\raisebox{-19pt}{\XeTeXpicfile UAlogo.png scaled 610}\hfill
    \headerfont{\href{https://www.albany.edu/cas/}%
      {College of Arts and Sciences}}\par\vspace{-11pt}\hfill
    \headerfont{\href{https://www.albany.edu/math/}%
      {Department of Mathematics and Statistics}}%
  }{%
    \ClassWarningNoLine{UAmathtalk}{File `UAlogo.png' not found}%
    \texttt{File UAlogo.png not found.}%
  }%
  \bigskip\bigskip
}
\renewcommand*{\maketitle}{%
  \header
  \begin{center}
    \Large
    \eventfont{\href{\eventurl}{\event}} \\[2.5\bigskipamount]
    \titlefont{\ifdefvoid{\@urladdr}{\@author}{\href{\@urladdr}{\@author}}}
    \ifdefvoid{\@address}{}{\\\@address} \\[1.5\bigskipamount]
    \titlefont{\@title}                  \\[2.0\bigskipamount]
    \@date                               \\
    \when\ in \where
    \ifdefvoid{\moreinfo}{}{\\\moreinfo} \\[3.0\bigskipamount]
  \end{center}
}
\renewenvironment{abstract}
  {\abstractsize\noindent\textsc{\abstractname.}}
  {\par\bigskip}
\AtBeginDocument{%
  \hypersetup{pdfinfo={
       Title={\@author, \@title},
      Author={\announcer},
     Subject={\@date, \event},
    Keywords={\event, announcement}
  }}
}
