git filter-branch --env-filter '
      if [ "$GIT_AUTHOR_EMAIL" = "a@b.com" ];
      then
          export GIT_AUTHOR_EMAIL="jjstamm.attic@gmail.com";
      fi
      if [ "$GIT_COMMITTER_EMAIL" = "a@b.com" ];
      then
          export GIT_COMMITTER_EMAIL="jjstamm.attic@gmail.com";
      fi
      ' HEAD